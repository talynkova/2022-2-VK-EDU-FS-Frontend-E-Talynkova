/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
    if (typeof(bytes) != 'number') return false;
    if (bytes < 0 || bytes == Infinity) return false;
    if (bytes == 0) return '0 B';
    var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let count=0;
    while(bytes/1024 >= 1 && count <= 7){
        bytes /= 1024;
        count++; 
        }
    if (!Number.isInteger(bytes) && Math.round(bytes*100) % 100 == 0 && bytes > 1) bytes = Math.round(bytes);
    else if (!Number.isInteger(bytes) && Math.round(bytes*100) % 10 == 0) bytes.toFixed(1);
    else if (!Number.isInteger(bytes)) bytes = bytes.toFixed(2);
    return `${bytes} ${sizes[count]}`
}



