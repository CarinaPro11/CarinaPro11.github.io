$(() => {
    const selectNextBackground = () => {
        const elements = $('.background div')
        const count = elements.length
        const nextIndex = Math.floor(Math.random() * count)
        const nextElement = $(elements[nextIndex])

        if (nextElement.hasClass('animating')) {
            return
        }

        nextElement.addClass('animating')

        const x = Math.floor(Math.random() * 80) + 10
        const y = Math.floor(Math.random() * 80) + 10
        const rotation = Math.floor(Math.random() * 360)
        nextElement.css('top', `${x}%`)
        nextElement.css('left', `${y}%`)
        nextElement.css('transform', `rotate(${rotation}deg)`)
        nextElement.addClass('active')
        setTimeout(() => {
            nextElement.removeClass('active')
            setTimeout(() => {
                nextElement.removeClass('animating')
            }, 2060)
        }, Math.floor(Math.random() * 2500) + 1500)
        return nextIndex
    }

    $('[data-bg]').each((index, element) => {
        const elem = $(element)
        const background = elem.attr('data-bg')

        elem.css('background-image', `url('img/${background}')`)
    })

    setInterval(() => {
        selectNextBackground()
    }, Math.floor(Math.random() * 500) + 50)
})
