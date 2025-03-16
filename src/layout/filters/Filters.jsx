import Search from './search/Search'
import Dropdown from './dropdown/Dropdown'

import "./filters.scss"

export default function Filters() {
    return (
        <div className='filters'>
            <Search />
            <Dropdown />
        </div>
    )
}
