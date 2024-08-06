import Cookies from 'js-cookie';
import { AnyAction } from 'redux';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, SetStateAction, useEffect, useState } from 'react';

import { RootState } from 'redux/store';
import { getExam } from 'redux/action/Exam';

const ExamTable = (props: tablePropsType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const examPageTodo = Cookies.get('delete');

  const examData = useSelector(
    (state: RootState) => state?.exam?.examData?.exams
  );
  const numberOfRecord = useSelector(
    (state: RootState) => state?.exam?.examData?.numberOfRecord
  );
  const adminToken = useSelector((state: RootState) => state?.login.loginData);
  const load = useSelector((state: RootState) => state?.loader.loader);

  const [dataCount, setDataCount] = useState(15);
  const [mount, setMount] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [id, setId] = useState<string | string[]>('');
  const [todo, setTodo] = useState('');
  const [pageWiseData, setPageWiseData] = useState([]);

  const endingIndex = dataCount * pageNumber;
  const startingIndex = dataCount * (pageNumber - 1);
  const pageCount = numberOfRecord / dataCount;

  useEffect(() => {
    console.log('in useEffect');
    const dataToDisplay = examData?.slice(startingIndex, endingIndex);
    setPageWiseData(dataToDisplay);
  }, [startingIndex, endingIndex, examData]);
  useEffect(() => {
    if (load === true) {
      setSelected([]);
      setCheckAll(false);
      props.setValues([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load]);

  useEffect(() => {
    props.valueOfPage === 1 && setPageNumber(props.valueOfPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.valueOfPage, examPageTodo !== undefined]);
  useEffect(() => {
    setMount(true);
  }, []);
  useEffect(() => {
    props.setPage(pageNumber);
  }, [pageNumber, props]);

  const getSearch = () => {
    let list = examData;
    if (props.searchData.length > 0) {
      list = list.filter((item: examValues) => {
        return Object.keys(item).some(
          () =>
            item &&
            ((item.mode &&
              item.mode
                .toString()
                .toLowerCase()
                .startsWith(props.searchData.toString().toLowerCase())) ||
              (item.name &&
                item.name
                  .toString()
                  .toLowerCase()
                  .startsWith(props.searchData.toString().toLowerCase())) ||
              (item.package.name &&
                item.package.name
                  .toString()
                  .toLowerCase()
                  .startsWith(props.searchData.toString().toLowerCase())) ||
              (item.examDuration &&
                item.examDuration
                  .toString()
                  .toLowerCase()
                  .startsWith(props.searchData.toString().toLowerCase())) ||
              (item.startDate &&
                item.startDate
                  .toString()
                  .toLowerCase()
                  .startsWith(props.searchData.toString().toLowerCase())) ||
              (item.endDate &&
                item.endDate
                  .toString()
                  .toLowerCase()
                  .startsWith(props.searchData.toString().toLowerCase())))
        );
      });
    }
    return list;
  };

  const globalCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelected([]);
      props.setValues([]);
      setCheckAll(e.target.checked);
      pageWiseData.map((item: examValues) =>
        setSelected(((pre: string[]) => [
          ...pre,
          item._id,
        ]) as unknown as string[])
      );
      pageWiseData.map((item: examValues) =>
        props.setValues(((pre: string[]) => [
          ...pre,
          item._id,
        ]) as unknown as string[])
      );
    } else {
      setSelected([]);
      setCheckAll(e.target.checked);
      props.setValues([]);
    }
  };

  const localCheck = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    if (e.target.checked) {
      setSelected((prev) => [...prev, id]);
      props.setValues(((prev: string[]) => [
        ...prev,
        id,
      ]) as unknown as string[]);
    } else {
      const a = selected.filter((dt) => dt != id);
      setSelected(a);
      props.setValues(a);
    }
  };

  const Edit = (id: string) => {
    setTodo('edit');
    selected.length === 1 && selected[0] === id
      ? (setSelectedType('single'),
        setId(id),
        dispatch(getExam(id, adminToken) as unknown as AnyAction),
        router.push(`/add/exam?editId=${id}`))
      : selected.length > 1
      ? (setModalShow(true), setSelectedType('multiple'))
      : selected.length === 0
      ? (setSelectedType('single'),
        setId(id),
        dispatch(getExam(id, adminToken) as unknown as AnyAction),
        router.push(`/add/exam?editId=${id}`))
      : (setModalShow(true), setSelectedType('incorrect'));
  };

  const Delete = (id: SetStateAction<string>) => {
    setModalShow(true);
    setTodo('delete');
    selected.length === 1 && selected[0] === id
      ? (setSelectedType('single'), setId([id]))
      : selected.length > 1
      ? setSelectedType('multiple')
      : selected.length === 0
      ? (setSelectedType('single'), setId([id as string]))
      : setSelectedType('incorrect');
  };
  const handlePageChange = (e: { selected: number }) => {
    setPageNumber(e.selected + 1);
  };
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDataCount(Number(e.target.value));
    setPageNumber(1);
  };

  return (
    <div>
      {mount && (
        <>
          <div className="table-scroll-height">
            <table className="customers">
              <tr className="table-heading">
                <td>
                  <div>Package</div>
                </td>
                <td>
                  <div>Name</div>
                </td>
                <td>
                  <div>Type</div>
                </td>
                <td>
                  <div>Start Date</div>
                </td>
                <td>
                  <div>End Date</div>
                </td>
                <td>
                  <div>Expiry Date</div>
                </td>

                <td>Action</td>
              </tr>
              {(props.searchData.length ? getSearch() : pageWiseData)?.map(
                (item: examValues, index: number) => {
                  return (
                    <>
                      <tr key={item._id} className="table-data">
                        <td>{(pageNumber - 1) * 15 + index + 1}</td>
                        <td>{item?.mode}</td>
                        <td>{item?.name}</td>
                        <td>{item?.package?.name}</td>

                        <td>02-08-2022</td>
                        <td>03-05-2022</td>

                        <td>
                          <div className="action-btn">
                            <div
                              onClick={() => {
                                Edit(item._id as string);
                              }}
                            >
                              <div className="con">
                                <div className="con-tooltip top">
                                  <div className="sucess-icon">
                                    <div className="edit-icon">
                                      <FontAwesomeIcon icon={faEdit} />
                                      <div className="tooltip ">
                                        <p>Edit</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>{' '}
                            </div>
                            <div
                              onClick={() => {
                                Delete(item._id as string);
                              }}
                            >
                              <div className="con">
                                <div className="con-tooltip top">
                                  <div className="sucess-icon">
                                    <div className="delete-icon">
                                      <FontAwesomeIcon icon={faTrash} />
                                      <div className="tooltip ">
                                        <p>Delete</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>{' '}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                }
              )}
            </table>
          </div>
          <div className="py-2">
            <div className="d-flex justify-content-end">
              <div className="me-3">
                <Form.Select
                  size="sm"
                  className="entites-box"
                  onChange={(e) => handleChange(e)}
                >
                  <option selected>15</option>
                  <option>30</option>
                  <option>60</option>
                  <option>100</option>
                  <option>150</option>
                  <option>200</option>
                </Form.Select>
              </div>
              <ReactPaginate
                initialPage={0}
                previousLabel="Previous"
                nextLabel="Next"
                forcePage={pageNumber - 1}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={5}
                onPageChange={(event) => {
                  handlePageChange(event);
                }}
                containerClassName="pagination"
                activeClassName="active"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ExamTable;
