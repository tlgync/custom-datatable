export function generateRows<T>(data, page, pageSize, setNewData): IGenerateRowProps<T> {

    const slicedeData = data.slice((page - 1) * pageSize, pageSize * page);
    return setNewData(slicedeData);

}
