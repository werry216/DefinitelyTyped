import { BlankNode, DataFactory, DatasetCore, DatasetCoreFactory, DefaultGraph, Literal, NamedNode, Quad, BaseQuad,
  Sink, Source, Store, Stream, Triple, Term, Variable, Quad_Graph } from "rdf-js";
import { EventEmitter } from "events";

function test_terms() {
    // Only types are checked in this tests,
    // so this does not have to be functional.
    const someTerm: Term = <any> {};

    if (someTerm.termType === 'Literal') {
      console.log(someTerm.datatype);
    }
    const namedNode: NamedNode = <any> {};
    const termType1: string = namedNode.termType;
    const value1: string = namedNode.value;
    namedNode.equals(someTerm);

    const blankNode: BlankNode = <any> {};
    const termType2: string = blankNode.termType;
    const value2: string = blankNode.value;
    blankNode.equals(someTerm);

    const literal: Literal = <any> {};
    const termType3: string = literal.termType;
    const value3: string = literal.value;
    const language3: string = literal.language;
    const datatype3: NamedNode = literal.datatype;
    literal.equals(someTerm);

    const variable: Variable = <any> {};
    const termType4: string = variable.termType;
    const value4: string = variable.value;
    variable.equals(someTerm);

    const defaultGraph: DefaultGraph = <any> {};
    const termType5: string = defaultGraph.termType;
    const value5: string = defaultGraph.value;
    defaultGraph.equals(someTerm);
}

function test_quads() {
    const quad: Quad = <any> {};
    const s1: Term = quad.subject;
    const p1: Term = quad.predicate;
    const o1: Term = quad.object;
    const g1: Term = quad.graph;
    quad.equals(quad);

    const triple: Triple = quad;
    const s2: Term = triple.subject;
    const p2: Term = triple.predicate;
    const o2: Term = triple.object;
    const g2: Term = triple.graph;
    triple.equals(quad);
    quad.equals(triple);
}

function test_datafactory() {
    const dataFactory: DataFactory = <any> {};

    const namedNode: NamedNode = dataFactory.namedNode('http://example.org');

    const blankNode1: BlankNode = dataFactory.blankNode('b1');
    const blankNode2: BlankNode = dataFactory.blankNode();

    const literal1: Literal = dataFactory.literal('abc');
    const literal2: Literal = dataFactory.literal('abc', 'en-us');
    const literal3: Literal = dataFactory.literal('abc', namedNode);

    const variable: Variable = dataFactory.variable ? dataFactory.variable('v1') : <any> {};

    const term: NamedNode = <any> {};
    const triple: Quad = dataFactory.triple(term, term, term);
    interface QuadBnode extends BaseQuad {
      subject: Term;
      predicate: Term;
      object: Term;
      graph: Term;
    }
    const quad = dataFactory.quad<QuadBnode>(literal1, blankNode1, term, term);
    const hasBnode = quad.predicate.termType === "BlankNode";
}

function test_stream() {
    const stream: Stream = <any> {};
    const quad: Quad = stream.read();

    const term: Term = <any> {};
    const source: Source = <any> {};
    const matchStream1: Stream = source.match();
    const matchStream2: Stream = source.match(term);
    const matchStream3: Stream = source.match(/.*/);
    const matchStream4: Stream = source.match(term, term);
    const matchStream5: Stream = source.match(term, /.*/);
    const matchStream6: Stream = source.match(term, term, term);
    const matchStream7: Stream = source.match(term, term, /.*/);
    const matchStream8: Stream = source.match(term, term, term, term);
    const matchStream9: Stream = source.match(term, term, term, /.*/);

    const sink: Sink = <any> {};
    const graph: Quad_Graph = <any> {};
    const eventEmitter1: EventEmitter = sink.import(stream);

    const store: Store = <any> {};
    const storeSource: Source = store;
    const storeSink: Sink = store;
    const eventEmitter2: EventEmitter = store.remove(stream);
    const eventEmitter3: EventEmitter = store.removeMatches();
    const eventEmitter4: EventEmitter = store.removeMatches(term);
    const eventEmitter5: EventEmitter = store.removeMatches(/.*/);
    const eventEmitter6: EventEmitter = store.removeMatches(term, term);
    const eventEmitter7: EventEmitter = store.removeMatches(term, /.*/);
    const eventEmitter8: EventEmitter = store.removeMatches(term, term, term);
    const eventEmitter9: EventEmitter = store.removeMatches(term, term, /.*/);
    const eventEmitter10: EventEmitter = store.removeMatches(term, term, term, term);
    const eventEmitter11: EventEmitter = store.removeMatches(term, term, term, /.*/);
    const eventEmitter12: EventEmitter = store.deleteGraph(graph);
    const eventEmitter13: EventEmitter = store.deleteGraph('http://example.org');
}

function test_dataset() {
    interface QuadBnode extends BaseQuad {
        subject: Term;
        predicate: Term;
        object: Term;
        graph: Term;
    }

    const quad: Quad = <any> {};
    const quadBnode: QuadBnode = <any> {};
    const term: Term = <any> {};

    const datasetCoreFactory1: DatasetCoreFactory = <any> {};
    const datasetCoreFactory2: DatasetCoreFactory<QuadBnode> = <any> {};

    const dataset1: DatasetCore = datasetCoreFactory1.dataset();
    const dataset2: DatasetCore = datasetCoreFactory1.dataset([quad, quad]);
    const dataset3: DatasetCore<QuadBnode> = datasetCoreFactory2.dataset([quadBnode, quad]);

    const dataset2Size: number = dataset2.size;
    const dataset2Add: DatasetCore = dataset2.add(quad);
    const dataset2Delete: DatasetCore = dataset2.delete(quad);
    const dataset2Has: boolean = dataset2.has(quad);
    const dataset2Match1: DatasetCore = dataset2.match();
    const dataset2Match2: DatasetCore = dataset2.match(term);
    const dataset2Match3: DatasetCore = dataset2.match(term, term);
    const dataset2Match4: DatasetCore = dataset2.match(term, term, term);
    const dataset2Match5: DatasetCore = dataset2.match(term, term, term, term);
    const dataset2Iterable: Iterable<Quad> = dataset2;

    const dataset3Size: number = dataset3.size;
    const dataset3Add: DatasetCore<QuadBnode> = dataset3.add(quadBnode);
    const dataset3Delete: DatasetCore<QuadBnode> = dataset3.delete(quadBnode);
    const dataset3Has: boolean = dataset3.has(quadBnode);
    const dataset3Match1: DatasetCore<QuadBnode> = dataset3.match();
    const dataset3Match2: DatasetCore<QuadBnode> = dataset3.match(term);
    const dataset3Match3: DatasetCore<QuadBnode> = dataset3.match(term, term);
    const dataset3Match4: DatasetCore<QuadBnode> = dataset3.match(term, term, term);
    const dataset3Match5: DatasetCore<QuadBnode> = dataset3.match(term, term, term, term);
    const dataset3Iterable: Iterable<QuadBnode> = dataset3;
}
