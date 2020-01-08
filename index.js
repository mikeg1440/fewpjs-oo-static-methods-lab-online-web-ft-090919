class Formatter {

  static capitalize(str){
    let newStr = str.split('')
    newStr[0] = str[0].toLocaleUpperCase()
    return newStr.join('')
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize(str){
    const badWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let strArr = str.split(' ')
    for (const i in strArr){
      if (i == 0 || !badWords.includes(strArr[i]) ){
        strArr[i] = this.capitalize(strArr[i])
      }
    }
    return strArr.join(' ')
  }

}
