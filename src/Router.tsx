import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Images } from './pages/Images'
import { Videos } from './pages/Videos'

export function Router(){
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/images" element={<Images/>} />
        <Route path="/videos" element={<Videos/>} />
    </Routes>
    )
}