$(() => {
    const selectNextBackground = () => {
        const elements = $('.background div')
        const count = elements.length
        const nextIndex = Math.floor(Math.random() * count)
        const nextElement = $(elements[nextIndex])

        if (nextElement.hasClass('active')) {
            return selectNextBackground()
        }

        const x = Math.floor(Math.random() * 100)
        const y = Math.floor(Math.random() * 100)
        nextElement.css('background-position', `${x}% ${y}%`)
        nextElement.addClass('active')
        setTimeout(() => {
            nextElement.removeClass('active')
        }, Math.floor(Math.random() * 3500) + 3500)
        return nextIndex
    }

    $('[data-bg]').each((index, element) => {
        const elem = $(element)
        const background = elem.attr('data-bg')

        elem.css('background-image', `url('img/${background}')`)
    })

    setInterval(() => {
        selectNextBackground()
    }, 3500)
})
