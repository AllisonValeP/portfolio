import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Images } from './pages/Images'
import { Videos } from './pages/Videos'
import { Rastros } from './pages/Rastros'

export function Router(){
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rastros" element={<Rastros/>} />
        <Route path="/videos" element={<Videos/>} />
    </Routes>
    )
}