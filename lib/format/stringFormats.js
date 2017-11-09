const capitalize = (string) => {
    return string && string[0].toUpperCase() + string.slice(1)
}

const cutString = (string, count) => {
	return string.slice(0, count) + (string.length > count ? "..." : "");
}

export {capitalize, cutString}