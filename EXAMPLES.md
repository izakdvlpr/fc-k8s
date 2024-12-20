# Commands

```
kind create cluster
kind get clusters
kind delete clusters kind
kind create cluster --config=.k8s/kind.yaml --name=fullcycle
kubectl cluster-info --context kind-fullcycle
kubectl get nodes
kubectl config get-clusters
docker build -t izakdvlpr/node-express-api:latest .
docker push izakdvlpr/node-express-api:latest
kubectl port-forward pod/node-server 8000:8000
kubectl delete pod node-server
kubectl apply -f .k8s/pod.yaml
kubectl get po
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
kubectl apply -f .k8s/service.yaml
kubectl get svc
kubectl port-forward svc/node-server-service 8000:8000
kubectl port-forward svc/node-server-service 9000:80
kubectl proxy --port=8080
kubectl apply -f .k8s/configmap-env.yaml
kubectl apply -f .k8s/configmap-family.yaml
kubectl exec -it node-server-7d9b795947-kj96w -- bash
kubectl logs node-server-7d9b795947-kj96w
kubectl apply -f .k8s/secret.yaml
kubectl apply -f .k8s/deployment.yaml && watch -n1 kubectl get po
kubectl describe pod node-server-d477cc547-7p8db
```

## Cluster

```
kind create cluster --config=.k8s/kind.yaml --name=fullcycle
```

## Pod

```
kubectl apply -f .k8s/pod.yaml
kubectl port-forward pod/node-server 8000:8000
```

## HPA

```
kubectl apply -f .k8s/deployment.yaml
kubectl apply -f .k8s/hpa.yaml
````