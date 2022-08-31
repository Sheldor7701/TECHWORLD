#include<bits/stdc++.h>
using namespace std;
int main(){
    freopen("in.txt","r",stdin);
    freopen("out.txt","a",stdout);
    vector<string> vec;
    string s="a";
    while(s!="0"){
        cin>>s;
        vec.push_back(s);

    } 
    cout<<endl<<endl<<endl;
    for(int i=0;i<vec.size();i++){
        cout<<","<<vec[i]<<"Brands:"<<"req.session."<<vec[i]<<"Brands\n";
    }
    cout<<endl<<endl<<endl;
    // for(int i=0;i<vec.size();i++){
    //     cout<<"M"<<vec[i]<<" IN VARCHAR2,"<<endl;
    // }
    // cout<<endl<<endl<<endl;
    //     for(int i=0;i<vec.size();i++){
    //         //'${PRODUCT.PROCESSOR_GRAPHICS}'
    //     cout<<"\'${PRODUCT."<<vec[i]<<"}\'  ,"<<endl;
    // }
    cout<<endl<<endl<<endl;

}