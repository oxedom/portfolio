const Skillbox = ({children, title}) => {
    return ( <section>
        <h1> {title} </h1>
        <div>
        {children}
        </div>

    </section>  );
}
 
export default Skillbox;