// Write a function that removes every lone 9 that is inbetween 7s.

// sevenAte9('79712312') => '7712312'
// sevenAte9('79797') => '777'

const sevenAte9 = string => string.replace(/(?<=7)9(?=7)/g, '')

sevenAte9('79712312')