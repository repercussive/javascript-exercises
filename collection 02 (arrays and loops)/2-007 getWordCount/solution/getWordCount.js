function getWordCount(string) {
  if (string == '') return 0
  
  return string.trim().split(' ').length
}