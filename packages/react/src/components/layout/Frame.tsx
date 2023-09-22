import { ScrollArea } from '@radix-ui/themes'
import './Frame.scss'
import { RouterProvider } from 'react-router-dom'
import router from '../../routes/router'
import { frameContext } from './useFrame'
import { useSnapshot } from 'valtio'
import { useEffect } from 'react'
import classNames from 'classnames'

export function Frame() {

  const fc = useSnapshot(frameContext);

  useEffect(() => {
    window.addEventListener("resize", fc.onResize);
    return () => window.removeEventListener("resize", fc.onResize)
  }, []);

  const sidebarClasses = classNames()

  const mainClasses = classNames({
    'mobile-footer': fc.isMobile,
    'sidebar-static': !fc.isFloating,
    'sidebar-floating': fc.isFloating,
    'sidebar-open': fc.sidebarOpen,
    'sidebar-closed': !fc.sidebarOpen,
    'sidebar-fullscreen': fc.sidebarShouldBeFullscreen,
  })

  return (
    <div className={mainClasses} id='layout'>
      <aside className="border border-red">
        <div id="sidebar" className="border border-4 border-red-200">
          <code><pre className='whitespace-pre-wrap'>{JSON.stringify(fc, null, 2)}</pre></code>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => fc.toggle()}>Toggle Sidebar</button>
        </div>
      </aside>
      <header className="border border-green">Header
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => fc.toggle()}>Toggle Sidebar</button>
      </header>
      <main className="border border-green">
        <ScrollArea type="always" scrollbars="vertical" style={{ height: '100%' }}>
          <RouterProvider router={router}></RouterProvider>
        </ScrollArea>
      </main>
      {fc.isMobile && <footer className="border border-purple">Footer</footer>}
    </div>
  )
}