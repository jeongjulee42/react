export default function useProducts({salesOnly}){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
          .then((res) => res.json())
          .then((data) => {
            console.log('π₯λ¨λν λ°μ΄ν°λ₯Ό λ€νΈμν¬μμ λ°μμ΄');
            setProducts(data);
          }).catch(e => setError('Error Rise'))
          .finally(() => setLoading(false));
        return () => {
          console.log('π§Ή κΉ¨λνκ² μ²­μνλ μΌλ€μ ν©λλ€.');
        };
    }, [salesOnly]);

    return [loading, error, products];
}