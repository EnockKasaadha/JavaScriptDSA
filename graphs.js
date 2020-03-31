/* 
    A GRAPH is an abstract model of a network structure.
    this is a set of nodes(vetices) connected by edges.
    Any binary relationship can be implemented by a graph

    we can also use graphs to represent roads, flights and communications

    a graph G = (V, E) where;
                V: a set of vertices
                E: a set of edges connecting the vertices in V

    ***some more terminologies***
        adjacent vertices - vertices connected by an edge
        degree - the number of edges connected to one node
        A simple path does not contain repeated vertices

        two nodes have a strong connection if they are connected in both directions otherwise not strongly connected 

    ***problems that can be solved with graphs***
        1. searching a graph for a specific vertex of a specific edge
        2. finding a path in the graph
        3. finding the shortest path between two vertices
        4. cylce detection

    REPRESENTING A GRAPH
    there are few ways we can represent a graph in form of data structures and among the existing possibilities, thereis no corrext way way. 
    
    representing a graph majorly depends on th problem you nedd to resolve and the type of graph as well
        1. THE ADJACENT MATRIX
        2. THE ADJACENT LIST
        3. THE INCIDENT MATRIX
*/

// CREATING THE GRAPH CLASS
    function Graph() {
        var vertices = []; //this stores the names of all the vertices of the graph
        var adjList = new Dictionary(); // like the one implemented in dictionaries and hashes, will use the name of the vertex as the key and the list of adjacent vertices as a value

        // the addVertex() method to add a new vertex
            this.addVertex = function (v) {
                vertices.push(v);
                adjList.set(v, []);
            }

        // the addEdge() method
            this.addEdge = function(v, w) {
                adjList.get(v).push(w);
                adjList.get(w).push(v);
            }

        // the toString() method to output the graph to the console
            this.toString = function () {
                var s = '';
                for (var i = 0; i<vertices.length; i++) {
                    s += vetices[i] + ' -> ';
                    var neighbors = adjList.get(vetices[i]);
                    for (var j = 0; j<neighbors.length; j++) {
                        s += neighbors[j] + ' ';
                    }

                    s += '\n';
                }

                return s;
            }

        /* 
            there are
        */
    }