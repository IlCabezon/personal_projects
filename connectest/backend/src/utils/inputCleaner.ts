export const inputCleaner = (string: string) => {
  const unnecessaryBlanksRegExp = /\s+/g
  let finalString = string

  if (unnecessaryBlanksRegExp.test(string)) {
    finalString = finalString.replace(unnecessaryBlanksRegExp, '')
  }
  return finalString.trim()
}
