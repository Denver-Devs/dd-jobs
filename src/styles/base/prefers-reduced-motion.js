import { css } from 'styled-components'

export const PrefersReducedMotion = css`
	/*
	* Resources on prefers-reduced-motion:
	* https://webkit.org/blog-files/prefers-reduced-motion/prm.htm
	* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
	*/
	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.001s !important;
			transition-duration: 0.001s !important;
		}
	}
`