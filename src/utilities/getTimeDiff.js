export const getTimeDiff = (timestamp) => {
    const currentTime = Date.now();
    const timeDiffInSecs = (currentTime - timestamp) / 1000;
    let text;
    if (timeDiffInSecs < 60) {
        text = "a few seconds ago"
    } else if (timeDiffInSecs >= 60 && timeDiffInSecs < 3600) {
        text = Math.floor(timeDiffInSecs / 60) + " minutes ago"
    } else if (timeDiffInSecs >= 3600 && timeDiffInSecs <= 24 * 3600) {
        text = Math.floor(timeDiffInSecs / 3600 ) + " hours ago"
    } else if (timeDiffInSecs > 24 * 3600 && timeDiffInSecs < 48 * 3600) {
        text = "over a day ago"
    }else if (timeDiffInSecs >= 48 * 3600 && timeDiffInSecs < 24 * 3600 * 30) {
        text = Math.floor(timeDiffInSecs / 3600 / 24) + " days ago"
    } else if (timeDiffInSecs >= 24 * 3600 * 30 && timeDiffInSecs <= 24 * 3600 * 30 * 12) {
        text = Math.floor(timeDiffInSecs / 3600 / 24 / 30) + " months ago"
    } else if (timeDiffInSecs > 24 * 3600 * 30 * 12 && timeDiffInSecs < 24 * 3600 * 30 * 24) {
        text = "over a year ago"
    } else {
        text = Math.floor(timeDiffInSecs / 3600 / 24 / 30 /12) + " years ago"
    }
    return text;
}