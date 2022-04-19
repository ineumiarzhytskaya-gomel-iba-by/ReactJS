import { useDispatch } from "react-redux";
import { cardActions } from "../../store/card-slice";
import ViewOnly from "../../components/ViewOnly";

const SettingsPage = () => {
  const dispatch = useDispatch();

  //setting/unsetting view mode
  const viewModeChangeHandler = () => {
    dispatch(cardActions.changeViewMode());
  };

  return <ViewOnly onViewModeChange={viewModeChangeHandler}></ViewOnly>;
};

export default SettingsPage;
