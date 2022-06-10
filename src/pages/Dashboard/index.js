import React, { useState, useEffect } from "react";
import Dashboard from "../../components/templates/Dashboard";
import { connect } from "react-redux";
import getDataPersonnels from "../../redux/personnels/actions";

const Index = (props) => {
  const { personnels } = props;
  const [idxStart, setIdxStart] = useState(0);
  const [idxEnd, setIdxEnd] = useState(4);

  useEffect(() => {
    props.getDataPersonnels(28);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <section>
        <Dashboard
          personnels={personnels}
          idxStart={idxStart}
          setIdxStart={setIdxStart}
          idxEnd={idxEnd}
          setIdxEnd={setIdxEnd}
        ></Dashboard>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    personnels: state.personnels,
  };
};

export default connect(mapStateToProps, getDataPersonnels)(Index);
