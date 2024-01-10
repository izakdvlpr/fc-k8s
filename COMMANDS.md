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
kubectl delete replicaset node-server
kubectl apply -f .k8s/deployment.yaml
kubectl get deployments
kubectl get replicasets
kubectl describe pod node-server-5658dc7cff-7hxb8
kubectl rollout history deployment node-server
kubectl rollout undo deployment node-server
kubectl rollout undo deployment node-server --to-revision=2
kubectl describe deployment node-server
```
