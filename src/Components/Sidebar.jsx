import { Route, Routes } from 'react-router-dom'
import items from '../data/sidebar.json'
import { Item } from './Item'
import { Home } from './Home'
import { Glance } from './About/Glance'
import { History } from './About/History'
import { Vision } from './About/Vision'
import { Mission } from './About/Mission'
import { Achivements } from './About/Achievements'
import { Statement } from './Footer/Statement'
import { Policy } from './Footer/Policy'
import { About } from './About'

export const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                {items.map((item, index) => <Item key={index} item={item} />)}
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/about/at-a-glance' element={<Glance />} />
                <Route path='/history' element={<History />} />
                <Route path='/vision' element={<Vision />} />
                <Route path='/mission' element={<Mission />} />
                <Route path='/achievments' element={<Achivements />} />
                <Route path='/statement' element={<Statement />} />
                <Route path='/policy' element={<Policy />} />
            </Routes>
        </>
    )
}