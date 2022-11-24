const {LogLevel} = require('@opentelemetry/core')
const { ZipkinExorter } = require("@opentelemetry/exporter-zipkin");
const { NodeTracerProvider } = require("@opentelemetry/node");
const { SimpleSpanProcessor } = require("@opentelemetry/tracing");

const provider = new NodeTracerProvider({
    logLevel: LogLevel.ERROR
})

provider.register()

provider.addSpanProcessor(
    new SimpleSpanProcessor(
        new ZipkinExorter({
            servicename: 'transaction'
        })
    )
)
