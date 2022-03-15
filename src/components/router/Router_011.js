import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
// https://ultimatecourses.com/blog/query-strings-search-params-react-router
// https://stackoverflow.com/questions/64782949/how-to-pass-params-into-link-using-react-router-v6

function Router011(props) {
  const Something = props => {
    let { id } = useParams();
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('id'));
    return id;
  };

  return (
    <div>
      <div>라우터 테스트입니다2~</div>
      id: {Something()}입니다
    </div>
  );
}

export default Router011;
