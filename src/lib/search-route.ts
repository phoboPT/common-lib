
interface IVisit {
    [key: string]: boolean
}
export const searchRoute = (src: string, dst: string, routes: any, allTargets: string[]) => {
    allTargets = 'ESTG ESE ESS ESA ESD'.split(' ');
    // routes = [
    //     {
    //         "startLocation": "ESTG",
    //         "endLocation": "ESE",
    //     },

    //     {
    //         "startLocation": "ESE",
    //         "endLocation": "ESA",
    //     },
    //     {
    //         "startLocation": "ESTG",
    //         "endLocation": "ESD",
    //     },
    //     {
    //         "startLocation": "ESS",
    //         "endLocation": "ESD",
    //     },
    //     {
    //         "startLocation": "ESD",
    //         "endLocation": "ESA",
    //     },
    //     {
    //         "startLocation": "ESTG",
    //         "endLocation": "ESS",
    //     },
    //     {
    //         "startLocation": "ESE",
    //         "endLocation": "ESD",
    //     },
    // ]
    // The graph
    const adjacencyList = new Map();

    // Add node
    function addNode(airport: string) {
        adjacencyList.set(airport, []);
    }

    // Add edge, undirected
    function addEdge(origin: string, destination: string) {
        adjacencyList.get(origin).push(destination);
        // adjacencyList.get(destination).push(origin);
    }

    // Create the Graph
    allTargets.forEach(addNode);
    routes.forEach((route: any) => addEdge(route.startLocation, route.endLocation))
    let visit: IVisit = { start: false };

    const paths: string[] = []
    const printAll = (graph: Map<string, string>, start: string, end: string, visited: IVisit, all: string): void => {

        if (start === end) {
            paths.push(all)
            return
        }
        visited[start] = true
        const destinations = adjacencyList.get(start);
        destinations.forEach((item: string) => {
            if (!visited[item]) {
                printAll(graph, item, end, visited, all + "," + item)
            }
        })
        visited[start] = false

    }
 

    printAll(adjacencyList, src, dst, visit, src)

    return paths;
}

