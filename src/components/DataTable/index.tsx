import { Fragment, useEffect, useState } from 'react';

//components
import { ColumnItem, Pagination, Table, TBody, Modal, Row ,RowItem } from '..';

// utils
import { generateRows } from '../../utils/generateRows/index';




function DataTable<T>({ columns, data, onRowSelected, rowStyle, cellStyle, editable }: IProps<T>) {
    const [activeIndex, setActiveIndex] = useState<number>(-1); 
    const [disabled, setDisabled] = useState<boolean>(false)
    const [newData, setNewData] = useState<T[]>(data); // set data
    const [visible, setVisible] = useState<boolean>(false) // modal visible
    const [pagination, setPagination] = useState<number>(10); 
    const [pageSize, setPageSize] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const [selectedItem, setSelectedItem] = useState<T>(null);

    // generate pagiantion
    useEffect(() => {
        generateRows(data, page, pageSize, setNewData);
    }, [pageSize, page, setNewData, data]);

    useEffect(() => {
        setPage(1);
        setPageSize(pagination);
    }, [pagination]);
    
    return (
        <>
            <Table className="table-style">
                <thead>
                    <Row>
                        {columns.map((col, index) => (
                            <ColumnItem key={index} colName={col.name} />
                        ))}
                    </Row>
                </thead>
                <TBody>
                    {newData.map((item, index) => (
                        <Row
                            rowStyle={
                                {pointerEvents: editable ? 'auto' : 'none', ...rowStyle}
                            }
                            key={index}
                            className={`${activeIndex === index ? "greenActive" : ""}`}
                            onClick={() => {
                                if(editable){
                                    if (activeIndex === index) {
                                        setActiveIndex(-1);
                                        setSelectedItem(null);
                                    } else {
                                        setActiveIndex(index);
                                        setSelectedItem(item)
                                        if (onRowSelected) {
                                            onRowSelected(item);
                                        }
                                    }
                                    setDisabled(!disabled);
                                    setVisible(!visible);
                                }
                                
                            }}
                        >
                            {columns.map((col, i) => {
                                if (!col.cell) {
                                    return <RowItem key={i} value={col.selector(item)} style={cellStyle} />
                                } else {
                                    return (
                                        <Fragment key={i}>
                                            {col.cell(item)}
                                        </Fragment>
                                    )
                                }
                            })}

                        </Row>
                    ))}
                </TBody>
            </Table>
            {/* pagination */}
            <Pagination
                page={page}
                setPage={setPage}
                pagination={pageSize}
                data={data}
                setPagination={setPagination} />
            {/* modal */}
            <Modal
                onClose={() => {
                    setActiveIndex(-1);
                    setVisible(false);
                }}
                onSubmit={(item) => {
                    let temp = [...data];
                    temp[activeIndex] = item;
                    setNewData(temp);
                    setActiveIndex(-1);
                    setVisible(false);
                    generateRows(temp, page, pageSize, setNewData);
                }}
                setVisible={setVisible}
                data={newData}
                setData={setNewData}
                visible={visible}
                columns={columns}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem} />
        </>
    );
}

export default DataTable;