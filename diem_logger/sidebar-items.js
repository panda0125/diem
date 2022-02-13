initSidebarItems({"constant":[["CHANNEL_SIZE","Default size of log write channel, if the channel is full, logs will be dropped"]],"derive":[["Schema",""]],"enum":[["Level","Logging levels, used for stratifying logs, and disabling less important ones for performance reasons"],["LevelFilter","A definition of the most verbose `Level` allowed, or completely off."],["SecurityEvent",""],["Value","The value part of a logging key value pair e.g. `info!(key = value)`"]],"fn":[["flush","Flush the global `Logger`"]],"macro":[["debug","Log at the `debug` level"],["error","Log at the `error` level"],["info","Log at the `info` level"],["log","Log at the given level, it’s recommended to use a specific level macro instead"],["sample","Samples a given function at a `SampleRate`, useful for periodically emitting logs or metrics on high throughput pieces of code."],["trace","Log at the `trace` level"],["warn","Log at the `warn` level"]],"mod":[["prelude",""],["sample","Periodic sampling for logs, metrics, and other use cases through a simple macro"],["tracing_adapter",""]],"struct":[["DiemLogger",""],["DiemLoggerBuilder","A builder for a `DiemLogger`, configures what, where, and how to write logs."],["Event","An individual structured logging event from a log line.  Includes the"],["Filter","A logging filter to determine which logs to keep or remove based on `Directive`s"],["Key","The key part of a logging key value pair e.g. `info!(key = value)`"],["KeyValue","The logging key value pair e.g. `info!(key = value)`"],["Logger",""],["Metadata","Associated metadata with every log to identify what kind of log and where it came from"]],"trait":[["Schema","A schema of key-value pairs."],["Visitor","A visitor for the key-value pairs in a `Schema`."],["Writer","An trait encapsulating the operations required for writing logs."]]});