function isAnagram (a,b) {
    let first = a.toLowerCase().split('').sort().join('').trim();
    let second = b.toLowerCase().split('').sort().join('').trim();
    return (first === second);
}