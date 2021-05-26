import React, { useEffect } from 'react'
import Modal from './Modal'
import { CreateTypes } from './ReviewPage'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import Select from 'react-select';

function ModalMissionAdd() {
    const validationSchema = yup.object().shape({
        // user: yup.string().typeError("Должно быть строкой").required('Обязательное поле')
    })

    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { fetchActiveOperations } = useActions()
    let activeOperationUsers
    let usersToSelect: Array<{ value: number, label: string }> = []

    if (activeOperation != null) {
        activeOperationUsers = activeOperation.users

        console.log(activeOperationUsers);
        activeOperationUsers.forEach((user: { id: number, firstName: string, secondName: string }) => {
            usersToSelect.push({ label: user.firstName + " " + user.secondName, value: user.id })
        });
    }
    let initialValuesCreate = {
        user: { value: 0, label: "" },
    }

    useEffect(() => {
        fetchActiveOperations()
    }, [])

    return (
        <>
            {/* <Modal modelType={CreateTypes.ModalMissionAdd}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Создать миссию</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>
                <div className="modal-body" style={{ height: "350px" }}>
                    <form>
                        <div className="form-group">
                            <label>Участник поиска:</label>
                            <MemberSelect></MemberSelect>

                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="button" className="btn btn-dark" data-dismiss="modal">Добавить</button>
                </div>
            </Modal> */}

            <Modal modelType={CreateTypes.ModalMissionAdd}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Создать миссию</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>

                <Formik
                    initialValues={
                        initialValuesCreate
                    }
                    validateOnBlur
                    onSubmit={async (values, { resetForm }) => {
                        alert("DEBUG")
                        console.log(values)
                        let axiosConfig = {
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                "Access-Control-Allow-Origin": "*",
                            }
                        };

                        try {
                            await axios.post(`https://localhost:44330/api/Mission`, {userId: values.user.value}, axiosConfig)
                                .then(res => console.log(res))
                                .catch(err => console.log('Login: ', err));
                            resetForm({})

                        } catch (error) {
                            console.log(error);
                        }
                        setTimeout(fetchActiveOperations(), 100);
                        $("#" + CreateTypes.ModalMissionAdd).modal('hide')


                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue }) => (

                        <div className="">
                            <Form>
                                <div className="modal-body" style={{ height: "350px" }}>
                                    <div className="form-group">
                                        <label>Участник поиска:</label>
                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={usersToSelect != null ? usersToSelect[0] : null}
                                            isClearable={true}
                                            isRtl={false}
                                            isSearchable={true}
                                            name="user"
                                            options={usersToSelect}
                                            onChange={option => setFieldValue("user", option)}
                                            onBlur={handleBlur}
                                            value={values.user}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                                    <button
                                        type={`submit`}
                                        className="btn btn-dark"
                                        data-dismiss="modal"
                                        disabled={!isValid && !dirty}
                                    >
                                        Создать
                                    </button>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

export default ModalMissionAdd

