docker run -v ${pwd}:/defs namely/protoc-all:1.22_1 -f accounts.proto -l go
Move-Item .\gen\pb-go\accounts.pb.go ..\accounts\accounts.pb.go -Force
Remove-Item .\gen\ -Recurse -Force