import './App.css'

const App = () => {
    return (
        <div className="main container max-w-4xl mx-auto px-4">
            <h1 className="text-white font-bold text-center pt-12 pb-2 text-4xl">SNBT</h1>
            <p className="text-center pb-10 text-white w-4/5 m-auto">
                SNBT (.snbt) is a new kind of config syntax focused on being expressive, fail-safe,
                and easy to understand.
            </p>
            <div className="code">
            <pre>
                <code className="code-area p-4 language-json shadow-md rounded">
                    <span className="misc line">&#123;</span>
                    <span className="comment line indent-1"># Boolean test 3</span>
                    <span className="comment line indent-1"># Default: false</span>
                    <div className="line indent-1">
                        <span className="prop">"test 3"</span><span className="notation">:</span> <span
                        className="bool">false</span><span className="notation">,</span>
                    </div>
                    <br />
                    <span className="comment line indent-1"># Default: true</span>
                    <div className="line indent-1">
                        <span className="prop">test_1</span><span className="notation">:</span> <span
                        className="bool">true</span>
                    </div>
                    <br />
                    <span className="comment line indent-1"># Boolean test 2</span>
                    <span className="comment line indent-1"># Default: true</span>
                    <div className="line indent-1">
                        <span className="prop">test_2</span><span className="notation">:</span> <span
                        className="bool">true</span>
                    </div>
                    <br />
                    <span className="comment line indent-1"># Group comment test</span>
                    <span className="comment line indent-1"># Line 2</span>
                    <div className="line indent-1">
                        <span className="prop">sub_test</span><span className="notation">:</span> <span
                        className="misc">&#123;</span>
                    </div>
                    <div className="indent-2">
                        <span className="line comment"># Default: false</span>
                        <div className="line"><span className="prop">boolean</span><span className="notation">:</span> <span
                            className="bool">false</span></div>
                        <br />
                        <span className="line comment"># Default: 0.5d</span>
                        <span className="line comment"># Range: 0.0d ~ 1.0d</span>
                        <div className="line"><span className="prop">double</span><span
                            className="notation">:</span> <span className="number">1.0</span><span
                            className="type">d</span></div>
                        <br />
                        <span className="line comment"># Default: 50</span>
                        <span className="line comment"># Range: 30 ~ +∞</span>
                        <div className="line"><span className="prop">int</span><span
                            className="notation">:</span> <span className="number">30</span></div>
                        <br />
                        <span className="line comment"># Default: "hello"</span>
                        <div className="line"><span className="prop">string</span><span
                            className="notation">:</span> <span className="string">"hello"</span></div>
                    </div>
                    <span className="misc line indent-1">&#125;</span>
                    <span className="misc">&#125;</span>
                </code>
            </pre>
            </div>
        </div>)
}

export default App
