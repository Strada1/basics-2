
// tabs
export const WEATHER_TABS = {
    WEATHER_BUTTONS: document.querySelector('.weather__buttons'),
    WEATHER_BUTTONS_ALL: Array.from( document.querySelectorAll('.weather__button')),
    WEATHER_TAB: document.querySelector('.weather__tabs'),
    WEATHER_TABS_ALL: document.querySelectorAll('.weather__tab'),
}



export function checkClickTabs(clickButton) {
	const clickButtonParent = clickButton.closest(".weather__button")
	const activeClickElementParent = clickButtonParent.classList.contains("-active")
	return clickButtonParent && !activeClickElementParent
}


export function changeTabs(clickButton) {
	const activeButton = WEATHER_TABS.WEATHER_BUTTONS.querySelector('.weather__button.-active');
	activeButton.classList.remove("-active")
	clickButton.classList.add("-active")
	const indexClickButton = WEATHER_TABS.WEATHER_BUTTONS_ALL.findIndex(item => item === clickButton)
	const activeTab = WEATHER_TABS.WEATHER_TAB.querySelector('.weather__tab.-active');
	activeTab.classList.remove("-active")
	const newActiveTab = WEATHER_TABS.WEATHER_TABS_ALL[indexClickButton]
	newActiveTab.classList.add("-active")
}
