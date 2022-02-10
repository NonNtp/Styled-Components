import React, { useState } from 'react'
import Dropdown from './components/Dropdown'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { SliderData } from './data/SliderData'
import GlobalStyle from './globalStyles'
// import { InfoData } from './data/InfoData'
// import InfoSection from './components/InfoSection'

function App() {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div>
			<GlobalStyle />
			<Navbar toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Hero slides={SliderData} />
			{/* <InfoSection {...InfoData} /> */}
		</div>
	)
}

export default App
