class atm:
#    def __init__(self,ac):
#        self._accnum:ac
#        __acc_name:'Mr.bhagat'
#     accnum=142342342
    accnam='mr.bhas'
    bal=0
    d={}
    c=0
    c1=0
    def add(self,dep):
        self.bal+=dep
        self.c+=1
        self.d[('deposite',self.c)]=dep
    def sub(self,wid):
        if self.bal>wid:
            self.bal-=wid
            self.c1+=1
            self.d[('Withdraw',self.c1)]=wid
        else:
            print("can't withdraw")
    def disp(self):
        print(self.accnum,self.accnam)
    def trans(self):
        print(self.d)

obj=atm()
##print(obj._accnum)
print(obj.bal)
obj.add(200)
print(obj.bal)
obj.sub(100)
print(obj.bal)
obj.disp()
obj.trans()
