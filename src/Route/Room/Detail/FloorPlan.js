//React library
import React, { useEffect, useState, useRef } from "react";
//Third party Library
import styled from "styled-components";
import Draggable from "react-draggable";
import Slider from "react-rangeslider";
//icons
import floorPlan from "img/floorPlan.jpg";
import { Couch } from "styled-icons/fa-solid/Couch";
import { Tv } from "styled-icons/feather/Tv";
import { Computer } from "styled-icons/material/Computer";
import { Bed } from "styled-icons/boxicons-regular/Bed";
import { Cabinet } from "styled-icons/boxicons-regular/Cabinet";
const FloorContainer = styled.div`
  display: none;
  position: fixed;

  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

//Styled-components
const FloorImage = styled.img`
  position: fixed;
  display: none;
  z-index: 11;
  width: 500px;
  height: 500px;
  position: relative;
`;
const StyledCouch = styled(Couch)`
  position: fixed;
  width: 100px;
`;
const StyledComputer = styled(Computer)`
  position: fixed;
  width: 100px;
`;
const StyledBed = styled(Bed)`
  position: fixed;
  width: 100px;
`;
const StyledTv = styled(Tv)`
  position: fixed;
  width: 100px;
`;
const StyledCabinet = styled(Cabinet)`
  position: fixed;
  width: 100px;
`;
const Controls = styled.div`
  position: absolute;
  height: 100%;
  width: 200px;
  background-color: white;
  left: 0px;
  top: 0px;
  display: grid;
  grid-template-rows: repeat(5, 20%);
`;
const ControlPanel = styled.div`
  background-color: #dfe6e9;
`;

const ScaleInput = styled.input``;
const SubmitForm = styled.form``;
const SubmitButton = styled.button`
  width: 40px;
  height: 40px;
`;
//메인함수
const FloorPlan = () => {
  let [IconRef, SetIconRef] = useState({
    CouchRef: React.useRef(null),
    TvRef: React.useRef(null),
    ComputerRef: React.useRef(null),
    BedRef: React.useRef(null),
    CabinetRef: React.useRef(null)
  });

  let [TransformState, SetTransformState] = useState({
    Tv: {
      scaleVertical: 1,
      scaleHorizon: 1,
      degree: 0
    },
    Couch: {
      scaleVertical: 1,
      scaleHorizon: 1,
      degree: 0
    },
    Computer: {
      scaleVertical: 1,
      scaleHorizon: 1,
      degree: 0
    },
    Bed: {
      scaleVertical: 1,
      scaleHorizon: 1,
      degree: 0
    },
    Cabinet: {
      scaleVertical: 1,
      scaleHorizon: 1,
      degree: 0
    }
  });

  const [sliderStateDegree, setSliderStateDegree] = useState({
    Tv: 0,
    Couch: 0,
    Computer: 0,
    Bed: 0,
    Cabinet: 0
  });

  const [sliderStateScaleHorizon, setSliderStateScaleHorizon] = useState({
    Tv: 1,
    Couch: 1,
    Computer: 1,
    Bed: 1,
    Cabinet: 1
  });

  const [sliderStateScaleVertical, setSliderStateScaleVertical] = useState({
    Tv: 1,
    Couch: 1,
    Computer: 1,
    Bed: 1,
    Cabinet: 1
  });

  const changeTransform = what => {
    if (what === "Couch") {
      IconRef.CouchRef.current.style.transform = `scale(${TransformState.Couch.scaleHorizon}, ${TransformState.Couch.scaleVertical}) rotate(${TransformState.Couch.degree}deg)`;
    } else if (what === "Tv") {
      IconRef.TvRef.current.style.transform = `scale(${TransformState.Tv.scaleHorizon}, ${TransformState.Tv.scaleVertical}) rotate(${TransformState.Tv.degree}deg)`;
    } else if (what === "Computer") {
      IconRef.ComputerRef.current.style.transform = `scale(${TransformState.Computer.scaleHorizon}, ${TransformState.Computer.scaleVertical}) rotate(${TransformState.Computer.degree}deg)`;
    } else if (what === "Bed") {
      IconRef.BedRef.current.style.transform = `scale(${TransformState.Bed.scaleHorizon}, ${TransformState.Bed.scaleVertical}) rotate(${TransformState.Bed.degree}deg)`;
    }
  };

  //이벤트 핸들링
  const handleSubmitSize = e => {
    e.preventDefault();
    if (e.target.innerText === "Tv") {
      console.log(IconRef.TvRef);
      IconRef.TvRef.current.style.width = e.target.elements[0].value + "px";
    } else if (e.target.innerText === "Couch") {
      IconRef.CouchRef.current.style.width = e.target.elements[0].value + "px";
    } else if (e.target.innerText === "Computer") {
      IconRef.ComputerRef.current.style.width =
        e.target.elements[0].value + "px";
    } else if (e.target.innerText === "Bed") {
      IconRef.BedRef.current.style.width = e.target.elements[0].value + "px";
    }
  };

  //Tv Degree 변경됐을 때
  const handleChangeTvDegree = value => {
    sliderStateDegree.Tv = value;
    setSliderStateDegree({
      ...sliderStateDegree,
      Tv: value
    });

    TransformState.Tv.degree = value;
    SetTransformState({
      ...TransformState,
      Tv: {
        ...TransformState.Tv,
        degree: value
      }
    });
    changeTransform("Tv");
  };

  //Tv scaleHorizon 변경됐을 때
  const handleChangeTvScaleHorizon = value => {
    sliderStateScaleHorizon.Tv = value;
    setSliderStateScaleHorizon({
      ...sliderStateScaleHorizon,
      Tv: value
    });

    TransformState.Tv.scaleHorizon = value;
    SetTransformState({
      ...TransformState,
      Tv: {
        ...TransformState.Tv,
        scaleHorizon: value
      }
    });
    changeTransform("Tv");
  };

  //Tv scaleVertical 변경됐을 때
  const handleChangeTvScaleVertical = value => {
    sliderStateScaleVertical.Tv = value;
    setSliderStateScaleVertical({
      ...sliderStateScaleVertical,
      Tv: value
    });

    TransformState.Tv.scaleVertical = value;
    SetTransformState({
      ...TransformState,
      Tv: {
        ...TransformState.Tv,
        scaleVertical: value
      }
    });
    changeTransform("Tv");
  };

  //Couch egree변경됐을 때
  const handleChangeCouchDegree = value => {
    sliderStateDegree.Couch = value;
    setSliderStateDegree({
      ...sliderStateDegree,
      Couch: value
    });

    TransformState.Couch.degree = value;
    SetTransformState({
      ...TransformState,
      Couch: {
        ...TransformState.Couch,
        degree: value
      }
    });
    changeTransform("Couch");
  };

  //Couch scaleHorizon 변경됐을 때
  const handleChangeCouchScaleHorizon = value => {
    sliderStateScaleHorizon.Couch = value;
    setSliderStateScaleHorizon({
      ...sliderStateScaleHorizon,
      Couch: value
    });

    TransformState.Couch.scaleHorizon = value;
    SetTransformState({
      ...TransformState,
      Couch: {
        ...TransformState.Couch,
        scaleHorizon: value
      }
    });
    changeTransform("Couch");
  };

  //Couch scaleVertical 변경됐을 때
  const handleChangeCouchScaleVertical = value => {
    sliderStateScaleVertical.Couch = value;
    setSliderStateScaleVertical({
      ...sliderStateScaleVertical,
      Couch: value
    });

    TransformState.Couch.scaleVertical = value;
    SetTransformState({
      ...TransformState,
      Couch: {
        ...TransformState.Couch,
        scaleVertical: value
      }
    });
    changeTransform("Couch");
  };

  //Computer Degree 변경됐을 때
  const handleChangeComputerDegree = value => {
    sliderStateDegree.Computer = value;
    setSliderStateDegree({
      ...sliderStateDegree,
      Computer: value
    });

    TransformState.Computer.degree = value;
    SetTransformState({
      ...TransformState,
      Computer: {
        ...TransformState.Computer,
        degree: value
      }
    });
    changeTransform("Computer");
  };

  //Computer scaleHorizon 변경됐을 때
  const handleChangeComputerScaleHorizon = value => {
    sliderStateScaleHorizon.Computer = value;
    setSliderStateScaleHorizon({
      ...sliderStateScaleHorizon,
      Computer: value
    });

    TransformState.Computer.scaleHorizon = value;
    SetTransformState({
      ...TransformState,
      Computer: {
        ...TransformState.Computer,
        scaleHorizon: value
      }
    });
    changeTransform("Computer");
  };

  //Computer scaleVertical 변경됐을 때
  const handleChangeComputerScaleVertical = value => {
    sliderStateScaleVertical.Computer = value;
    setSliderStateScaleVertical({
      ...sliderStateScaleVertical,
      Computer: value
    });

    TransformState.Computer.scaleVertical = value;
    SetTransformState({
      ...TransformState,
      Computer: {
        ...TransformState.Computer,
        scaleVertical: value
      }
    });
    changeTransform("Computer");
  };

  //Bed Degree 변경됐을 때
  const handleChangeBedDegree = value => {
    sliderStateDegree.Bed = value;
    setSliderStateDegree({
      ...sliderStateDegree,
      Bed: value
    });

    TransformState.Bed.degree = value;
    SetTransformState({
      ...TransformState,
      Bed: {
        ...TransformState.Bed,
        degree: value
      }
    });
    changeTransform("Bed");
  };

  //Bed scaleHorizon 변경됐을 때
  const handleChangeBedScaleHorizon = value => {
    sliderStateScaleHorizon.Bed = value;
    setSliderStateScaleHorizon({
      ...sliderStateScaleHorizon,
      Bed: value
    });

    TransformState.Bed.scaleHorizon = value;
    SetTransformState({
      ...TransformState,
      Bed: {
        ...TransformState.Bed,
        scaleHorizon: value
      }
    });
    changeTransform("Bed");
  };

  //Bed scaleVertical 변경됐을 때
  const handleChangeBedScaleVertical = value => {
    sliderStateScaleVertical.Bed = value;
    setSliderStateScaleVertical({
      ...sliderStateScaleVertical,
      Bed: value
    });

    TransformState.Bed.scaleVertical = value;
    SetTransformState({
      ...TransformState,
      Bed: {
        ...TransformState.Bed,
        scaleVertical: value
      }
    });
    changeTransform("Bed");
  };

  return (
    <>
      <FloorContainer className="floor">
        <FloorImage
          visible={true}
          className="floor"
          src={floorPlan}
          alt=""
        ></FloorImage>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          grid={[1, 1]}
          scale={1}
          bounds="parent"
        >
          <div
            className="handle"
            style={{ width: "min-content", zIndex: "30" }}
          >
            <StyledCouch ref={IconRef.CouchRef} id="couch" />
          </div>
        </Draggable>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          grid={[1, 1]}
          scale={1}
          bounds="parent"
        >
          <div style={{ width: "min-content", zIndex: "30" }}>
            <StyledTv ref={IconRef.TvRef} id="tv" className="handle" />
          </div>
        </Draggable>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          grid={[1, 1]}
          scale={1}
          bounds="parent"
        >
          <div
            className="handle"
            style={{ width: "min-content", zIndex: "30" }}
          >
            <StyledComputer ref={IconRef.ComputerRef} id="computer" />
          </div>
        </Draggable>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          grid={[1, 1]}
          scale={1}
          bounds="parent"
        >
          <div
            className="handle"
            style={{ width: "min-content", zIndex: "30" }}
          >
            <StyledBed ref={IconRef.BedRef} id="bed" />
          </div>
        </Draggable>
        <Controls>
          <ControlPanel>
            <SubmitForm onSubmit={handleSubmitSize}>
              Tv
              <ScaleInput></ScaleInput>
              <SubmitButton type="submit"></SubmitButton>
              <Slider
                min={-180}
                max={180}
                value={sliderStateDegree.Tv}
                onChange={handleChangeTvDegree}
              />
              <Slider
                min={0}
                max={3}
                step={0.1}
                value={sliderStateScaleVertical.Tv}
                onChange={handleChangeTvScaleVertical}
              />
              <Slider
                min={0}
                max={3}
                step={0.1}
                value={sliderStateScaleHorizon.Tv}
                onChange={handleChangeTvScaleHorizon}
              />
            </SubmitForm>
          </ControlPanel>
          <ControlPanel>
            <SubmitForm onSubmit={handleSubmitSize}>
              Couch
              <ScaleInput></ScaleInput>
              <SubmitButton type="submit"></SubmitButton>
              <Slider
                min={-180}
                max={180}
                value={sliderStateDegree.Couch}
                onChange={handleChangeCouchDegree}
              />
              <Slider
                min={0}
                max={3}
                step={0.1}
                value={sliderStateScaleVertical.Couch}
                onChange={handleChangeCouchScaleVertical}
              />
              <Slider
                min={0}
                max={3}
                step={0.1}
                value={sliderStateScaleHorizon.Couch}
                onChange={handleChangeCouchScaleHorizon}
              />
            </SubmitForm>
          </ControlPanel>
          <ControlPanel>
            <SubmitForm onSubmit={handleSubmitSize}>
              Computer
              <ScaleInput></ScaleInput>
              <SubmitButton type="submit"></SubmitButton>
              <Slider
                min={-180}
                max={180}
                value={sliderStateDegree.Computer}
                onChange={handleChangeComputerDegree}
              />
              <Slider
                min={0}
                max={3}
                step={0.1}
                value={sliderStateScaleVertical.Computer}
                onChange={handleChangeComputerScaleVertical}
              />
              <Slider
                min={0}
                max={3}
                step={0.1}
                value={sliderStateScaleHorizon.Computer}
                onChange={handleChangeComputerScaleHorizon}
              />
            </SubmitForm>
          </ControlPanel>
          <ControlPanel>
            <SubmitForm onSubmit={handleSubmitSize}>
              Bed
              <ScaleInput></ScaleInput>
              <SubmitButton type="submit"></SubmitButton>
              <Slider
                min={-180}
                max={180}
                value={sliderStateDegree.Bed}
                onChange={handleChangeBedDegree}
              />
              <Slider
                min={0}
                max={3}
                step={0.1}
                value={sliderStateScaleVertical.Bed}
                onChange={handleChangeBedScaleVertical}
              />
              <Slider
                min={0}
                max={3}
                step={0.1}
                value={sliderStateScaleHorizon.Bed}
                onChange={handleChangeBedScaleHorizon}
              />
            </SubmitForm>
          </ControlPanel>
        </Controls>
      </FloorContainer>
    </>
  );
};

export default FloorPlan;
