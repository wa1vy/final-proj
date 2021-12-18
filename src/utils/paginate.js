// export function paginate(items, pageNumber, pageSize) {
//     console.log(items)
//     const startIndex = (pageNumber - 1) * pageSize
//     return [...items].splice(startIndex, pageSize)
// }
export function paginate(items, pageNumber, pageSize) {
    return items.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}