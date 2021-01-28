import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../actions/index";
import { ActionType } from "../action-types/index";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });
    try {
      const { data } = await axios.get(
        "http://registry.npmjs.com/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      console.log(names);
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
