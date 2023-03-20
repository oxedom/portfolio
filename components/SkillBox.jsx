const Skillbox = ({children}) => {

    const box = " rounded-lg bg-gray-100 w-60 h-60 md:w-96 md:h-96" 


    return ( <div className={box}>
        {children}
    </div>  );
}
 
export default Skillbox;