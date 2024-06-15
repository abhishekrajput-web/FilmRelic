import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollButton = () => {

	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true)
		}
		else if (scrolled <= 300) {
			setVisible(false)
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
			/* you can also use 'auto' behaviour
				in place of 'smooth' */
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<button className='fixed w-16 h-16 left-[80%] sm:left-[90%] bottom-[40px] rounded-full text-4xl sm:text-5xl z-10 cursor-pointer text-white hover:text-gray-200'>
			<FaArrowCircleUp onClick={scrollToTop}
				style={{ display: visible ? 'inline' : 'none' }} />
		</button>

	);
}

export default ScrollButton;
