export function paginate(items, pageNumber, pageSize) {
    console.log(items)
    const startIndex = (pageNumber - 1) * pageSize
    console.log(Object.keys(items))
    //return items.splice(startIndex, pageSize)
}
