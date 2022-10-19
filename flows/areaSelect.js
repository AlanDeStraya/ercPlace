//imports
const areaArray = ['area-one-one', 'area-two-one', 'area-one-two', 'area-two-two']

const AreaSelector = () => {

    const [checkedAreas, setCheckedAreas] = useState(
      new Array(areaArray.length).fill(false)
    );

    function handleAreaChange(position) {
      setCheckedAreas(() => checkedAreas.map((item, index) => index === position ? !item : item));
    };

    useEffect(() => {
      console.log(areas); //third log, undefined
    }, [areas]);

    function createAreasOne() {
      return areaArray.slice(0, areaArray.length / 2).map((areaName, index) => {
        return (
          <div className='area-container' key={areaName}>
            <input onChange={() => handleAreaChange(index)} checked={checkedAreas[index]} type='checkbox' className='area-checkbox' id={`${areaName}-box`} />
            <label className='area' id={areaName} htmlFor={`${areaName}-box`}></label>
          </div>
        )
      });
    };
    function createAreasTwo() {
      return areaArray.slice(areaArray.length / 2).map((areaName, index) => {
        return (
          <div className='area-container' key={areaName}>
            <input name={areaName} value={areaName} onChange={() => handleAreaChange(index)} checked={checkedAreas[index]} type='checkbox' className='area-checkbox' id={`${areaName}-box`} />
            <label className='area' id={areaName} htmlFor={`${areaName}-box`}></label>
          </div>
        )
      });
    };

    return (
        <div>
            {createAreasOne()}
            {createAreasTwo()}
        </div>
    )

};
//export