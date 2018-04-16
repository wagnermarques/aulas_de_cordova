#!/bin/bash

#vc precisa rodar esse script usando o comando source e nao simplesmente ./setup.sh
#dessa maneira o comando export deixa a variavel PATH alterado no sua sessao do terminal

export ANDROID_HOME=/home/wagner/PROGSATIVOS/androidSdk
#export ANDROID_SDK_ROOT=/home/wagner/PROGSATIVOS/androidSdk
export JAVA_HOME=/home/wagner/PROGSATIVOS/jdk1.8.0_161
export GRADLE_HOME=/home/wagner/PROGSATIVOS/gradle-4.6-rc-2
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_SDK_ROOT/tools:$ANDROID_SDK_ROOT/platform-tools:$GRADLE_HOME/bin

#cordova plugin add cordova-plugin-console
#cordova plugin add cordova-plugin-battery-status

#ANDROID_SDK_r25_URL=https://dl.google.com/android/repository/tools_r25.2.3-linux.zip
#ANDROID_SDK_r38_URL=https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip
#wget --no-clobber --output-document $HOME/Downloads/tools_r25.2.3-linux.zip $ANDROID_SDK_r25_URL
#wget --no-clobber --output-document $HOME/Downloads/sdk-tools-linux-3859397.zip $ANDROID_SDK_r25_URL

#unzip -o $HOME/Downloads/tools_r25.2.3-linux.zip -d $HOME/Downloads/tools_r25.2.3-linux
#unzip -o $HOME/Downloads/sdk-tools-linux-3859397.zip -d $HOME/Downloads/tools


#########consertando o erro: Failed to find 'android' command in your 'PATH'.
#faz o download de um sdk que tem o comando e coloca a pasta tools dele no nosso sdk atual
#wget --no-clobber skip downloads that would download to existing files.
#unzip -o descompacta fazendo sobrescrevendo caso ja tiver sido descompactado antes (acontece qdo roda o script duas vezes)


#if [ ! -d $ANDROID_HOME/tools_original ]; then
    #estou perguntando se o diretorio existe, porque no caso de vc ter rodado esse
    #script mais de uma vez o tools r38 ja foi copiado pra tools_original antes
    #e nesse caso a gente nao quer tocar nesse tools_original pra que ele nao deixe de ser original
    #certo? 
#    mv -f $ANDROID_HOME/tools $ANDROID_HOME/tools_original
#fi

#neste ponto do script a gente sabe que o nosso tools original esta guardado
#yes | cp -rf $HOME/Downloads/tools $ANDROID_HOME






