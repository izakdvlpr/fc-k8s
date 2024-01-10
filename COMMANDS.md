# Commands

```
kubectl get po
kubectl get deployments
kubectl cluster-info --context kind-fullcycle
kubectl config get-clusters
docker build -t izakdvlpr/node-express-api:latest .
docker push izakdvlpr/node-express-api:latest
kubectl apply -f .k8s/pod.yaml
kubectl get nodes
kubectl port-forward pod/node-server 8000:3333
kubectl delete pod node-server
kubectl apply -f .k8s/replicaset.yaml
kubectl get replicasets
kubectl describe pod node-server-2kvtt
```
