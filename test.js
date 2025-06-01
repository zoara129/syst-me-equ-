    function solvethis() {
            let a1 = parseFloat(document.getElementById("a1").value);
            let b1 = parseFloat(document.getElementById("b1").value);
            let c1 = parseFloat(document.getElementById("c1").value);
            let d1 = parseFloat(document.getElementById("d1").value);

            let a2 = parseFloat(document.getElementById("a2").value);
            let b2 = parseFloat(document.getElementById("b2").value);
            let c2 = parseFloat(document.getElementById("c2").value);
            let d2 = parseFloat(document.getElementById("d2").value);

            let a3 = parseFloat(document.getElementById("a3").value);
            let b3 = parseFloat(document.getElementById("b3").value);
            let c3 = parseFloat(document.getElementById("c3").value);
            let d3 = parseFloat(document.getElementById("d3").value);

            let A = [[a1, b1, c1], [a2, b2, c2], [a3, b3, c3]];
            let B = [d1, d2, d3];

            function delta(matrix) {
                return matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1])
                - matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0])
                + matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);
            }

           let detA = delta(A);

           if (detA !== 0) {
           let Ax = [[B[0], b1, c1], [B[1], b2, c2], [B[2], b3, c3]];
           let Ay = [[a1, B[0], c1], [a2, B[1], c2], [a3, B[2], c3]];
           let Az = [[a1, b1, B[0]], [a2, b2, B[1]], [a3, b3, B[2]]];

           let x = delta(Ax) / detA;
           let y = delta(Ay) / detA;
           let z = delta(Az) / detA;
       
           document.getElementById("result").innerHTML = `Solutions: x = ${x}, y = ${y}, z = ${z}`;
        } else {
           document.getElementById("result").innerHTML = "Le systeme n'a pas de solution unique.";
        }
    }

