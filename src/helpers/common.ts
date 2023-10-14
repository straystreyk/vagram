export const formatToRusNumber = (value: string) => {
    if (!value) return '+7'
    if (value[1] === '+') return '+7'

    const formatted = value.replace(/\D+/g, '')
    const numberLength = 11

    let result
    if (formatted.includes('+8') || formatted[0] === '8') {
        result = ''
    } else {
        result = '+'
    }

    for (let i = 0; i < formatted.length && i < numberLength; i++) {
        switch (i) {
            case 0:
                result += formatted[i] === '9' ? '7 (9' : '7 ('
                continue
            case 4:
                result += ') '
                break
            case 7:
                result += '-'
                break
            case 9:
                result += '-'
                break
            default:
                break
        }
        result += formatted[i]
    }

    return result
}