```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using the previous state value
    const intervalId = setInterval(() => {
      setCount(count + 1); // Using previous value of count, leading to stale closure
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```