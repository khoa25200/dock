import { useDispatch, useSelector } from 'react-redux';
import './ProfilePage.less';
import { StateType } from '../../libs/redux/rootReducers';
import { useEffect } from 'react';
import { getUserAction } from '../../libs/redux/User/slice';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  const { data, isLoading } = useSelector((state: StateType) => state.users);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction(id as string));
  }, [id]);
  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : data ? (
        <div>Hi, I'm {data.fullname}</div>
      ) : (
        <span>No user found!</span>
      )}
    </>
  );
}

export default ProfilePage;
