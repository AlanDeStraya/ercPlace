//imports
const areaArray = ['area-one-one', 'area-two-one', 'area-one-two', 'area-two-two']

const AreaSelector = () => {

    const [areas, setAreas] = useState(areaArray.reduce(
      (options, option) => ({...options, [option]: false}), {}
    ));

    function handleAreaChange(changeEvent) {
      const name = changeEvent.target.id;
      console.log(name); //first log, works
      setAreas(prevState => {
        let obj = Object.assign({}, areas);
        obj.name = !prevState.name;
      });
      console.log(areas); //second log, works
    };

    useEffect(() => {
      console.log(areas); //third log, undefined
    }, [areas]);

    function createArea(areaName) {
      return (
        <div className='area-container' key={areaName}>
          <input onChange={handleAreaChange} type='checkbox' className='area-checkbox' id={`${areaName}-box`} />
          <label className='area' id={areaName} htmlFor={`${areaName}-box`}></label>
        </div>
      )
    };

    function createAreasOne() {
      return areaArray.slice(0, areaArray.length / 2).map(a => createArea(a));
    };
    function createAreasTwo() {
      return areaArray.slice(areaArray.length / 2).map(a => createArea(a));
    };

    return (
        <div>
            {createAreasOne()}
            {createAreasTwo()}
        </div>
    )

};
//export