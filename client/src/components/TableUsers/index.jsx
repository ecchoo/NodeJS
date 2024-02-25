import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setUsers } from "@/store/reducers/Admin"
import { useFetchAdminUsersQuery } from "@/api"
import { USERS_COLUMNS } from "@/constants/userColumns"
import { Table } from "antd"

export const TableUsers = () => {
    const dispatch = useDispatch()
    const { admin: { users } } = useSelector(state => state)

    const { data, isLoading } = useFetchAdminUsersQuery()

    useEffect(() => {
        if (!isLoading && !users.length) {
            // const initialUsers = data.map(user => ({
            //     ...user,
            //     dateRegister: user.createdAt
            // }))
            console.log(data)
            dispatch(setUsers(data))
        }
    }, [isLoading])

    return (
        <>
            {
                !isLoading ? (
                    <Table columns={USERS_COLUMNS} dataSource={users}></Table>
                ) : (
                    <span>Loading</span>
                )
            }
        </>
    )
}